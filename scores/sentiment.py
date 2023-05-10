from transformers import pipeline
import json

sentiment_pipeline = pipeline(
    "sentiment-analysis", model="nlptown/bert-base-multilingual-uncased-sentiment"
)

# retrieve the titles and articles for each media
medias = {
    "temps": ["./data/temps/", 14],
    "figaro": ["./data/figaro/", 16],
    "ny": ["./data/ny/", 16],
}


media_counter = []
articles_scores = []
for media in medias:
    titles = []
    articles = []
    scores = []
    for article_idx in range(1, medias[media][1] + 1):
        with open(medias[media][0] + str(article_idx) + ".json", encoding="utf-8") as f:
            data = json.load(f)
            title = data["title"]
            article = data["article"]
            max_chunk_length = 512  # Maximum sequence length allowed by the model
            chunks = [
                article[i : i + max_chunk_length]
                for i in range(0, len(article), max_chunk_length)
            ]

            sentiment_scores = []
            for chunk in chunks:
                sentiment = sentiment_pipeline(chunk)[0]
                stars = int(sentiment["label"].split(" ")[0])
                sentiment_scores.append(stars)
            # Calculate the average sentiment score for the entire article
            average_sentiment_score = sum(sentiment_scores) / len(sentiment_scores)

            articles_scores.append(
                {
                    "media": media,
                    "title": title,
                    "avg_stars": average_sentiment_score,
                }
            )


# save the results
with open("articles_scores.json", "w", encoding="utf-8") as f:
    json.dump(articles_scores, f, ensure_ascii=False, indent=4)
