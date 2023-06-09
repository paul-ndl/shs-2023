import json
from collections import Counter
import re
from nltk.corpus import stopwords
import matplotlib.pyplot as plt


medias = {
    "temps": ["./data/temps/", 14],
    "figaro": ["./data/figaro/", 16],
    "ny": ["./data/ny/", 15],
}

french_stopwords = set(stopwords.words("french"))
english_stopwords = set(stopwords.words("english"))


media_counter = []
for media in medias:
    titles = []
    articles = []
    for article_idx in range(1, medias[media][1] + 1):
        with open(medias[media][0] + str(article_idx) + ".json", encoding="utf-8") as f:
            data = json.load(f)
            title = data["title"]
            article = data["article"]
            # remove the punctuation from the title and the article
            title = title.replace("’", " ").replace("'", " ")
            title = re.sub(r"[^\w\s]", "", title)
            title = title.lower()
            # remove the stopwords from the title
            title = " ".join(
                [
                    word
                    for word in title.split()
                    if word not in french_stopwords
                    and word not in english_stopwords
                    and word != "federer"
                    and word != "roger"
                ]
            )
            article = article.replace("’", " ").replace("'", " ")
            article = re.sub(r"[^\w\s]", "", article)
            article = article.lower()
            # remove the stopwords from the article
            article = " ".join(
                [
                    word
                    for word in article.split()
                    if word not in french_stopwords
                    and word not in english_stopwords
                    and word != "federer"
                    and word != "roger"
                ]
            )
            titles.append(title)
            articles.append(article)
    media_counter.append(
        {"media": media, "counter": Counter(" ".join(articles).split()).most_common(20)}
    )


media1 = media_counter[0]["media"]
counter1 = media_counter[0]["counter"]

media2 = media_counter[1]["media"]
counter2 = media_counter[1]["counter"]

media3 = media_counter[2]["media"]
counter3 = media_counter[2]["counter"]


# Extract words and their counts for each media
words_1, counts_1 = zip(*counter1)
words_2, counts_2 = zip(*counter2)
words_3, counts_3 = zip(*counter3)

match_medias = {
    "temps": "Suisse",
    "figaro": "France",
    "ny": "Etats Unis",
}
# Create subplots
fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(10, 8))

max_count = max(max(counts_1) + 10, max(counts_2) + 10, max(counts_3) + 10)
ax1.set_ylim([0, max_count])
ax2.set_ylim([0, max_count])
ax3.set_ylim([0, max_count])

# Plot for 'temps' media
ax1.bar(words_1, counts_1)
ax1.set_title(match_medias[media1])

# Plot for 'figaro' media
ax2.bar(words_2, counts_2)
ax2.set_title(match_medias[media2])

# Plot for 'ny' media
ax3.bar(words_3, counts_3)
ax3.set_title(match_medias[media3])

ax1.tick_params(axis="x", labelrotation=45)
ax2.tick_params(axis="x", labelrotation=45)
ax3.tick_params(axis="x", labelrotation=45)
plt.subplots_adjust(hspace=0.5)

# Adjust spacing between subplots
fig.tight_layout(pad=3.0)

# Add a title to the figure with 15pt font size
fig.suptitle("Mots les plus utilisés dans les articles", fontsize=17)
# add more space between the suptitle and the subplots
fig.subplots_adjust(top=0.88)


# save the plot
plt.savefig("most_used_words.png")
