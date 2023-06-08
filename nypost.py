import bs4
import json

PATH_ARTICLES = "./articles/nypost/"
PATH_DATA = "./data/ny/"
nb_articles = 6

for i in range(1, nb_articles + 1):
    with open(PATH_ARTICLES + str(i) + ".htm", encoding="utf-8") as f:
        soup = bs4.BeautifulSoup(f, "html.parser")
        paragraphs = []
        title = soup.find("h1").text.replace("\n", " ").replace("\t", "")
        # get the content of the article
        content = (
            soup.find("div", class_="single__content entry-content m-bottom")
            .text.replace("\n", " ")
            .replace("\t", "")
        )

        paragraphs.append(content)

        article = "".join(paragraphs)
        data = {"title": title, "article": article}
        with open(PATH_DATA + str(i + 9) + ".json", "w", encoding="utf-8") as outfile:
            json.dump(data, outfile, ensure_ascii=False, indent=4)
