import json
from collections import Counter
import re
from nltk.corpus import stopwords
import spacy


medias = {
    "temps": ["./data/temps/", 14],
    "figaro": ["./data/figaro/", 16],
    "ny": ["./data/ny/", 16],
}

french_stopwords = set(stopwords.words("french"))
english_stopwords = set(stopwords.words("english"))

nlp = spacy.load("en_core_web_sm")
# excluded tags
excluded_tags = {"ADV", "PROPN"}

# same for the french language
nlp_fr = spacy.load("fr_core_news_sm")

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
                    if word not in french_stopwords and word not in english_stopwords
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
                    if word not in french_stopwords and word not in english_stopwords
                ]
            )
            new_article = []
            model = nlp_fr
            if media == "ny":
                model = nlp
            for token in model(article):
                if token.pos_ not in excluded_tags:
                    new_article.append(token.text)
            article = " ".join(new_article)
            titles.append(title)
            articles.append(article)
    # print("Media : ", media, Counter(" ".join(titles).split()).most_common(8))
    print("Media : ", media, Counter(" ".join(articles).split()).most_common(8))
