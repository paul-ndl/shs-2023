from transformers import pipeline
from langdetect import detect

# Initialize sentiment analysis models
fr_sentiment_pipeline = pipeline(
    "sentiment-analysis", model="nlptown/bert-base-multilingual-uncased-sentiment"
)

articles = [
    "Cet article est très intéressant.",
    "This article is very informative.",
    "I hate this article.",
]

for article in articles:
    # Detect language
    language = detect(article)

    sentiment = fr_sentiment_pipeline(article)

    # Print sentiment result
    print(f"Article: {article}")
    print(f"Sentiment: {sentiment[0]['label']}")
    print(f"Score: {sentiment[0]['score']}")
    print(sentiment)
    print("----------------------")
