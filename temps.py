import bs4
import json

PATH_ARTICLES = "./articles/temps/"
PATH_DATA = "./data/temps/"
nb_articles = 14

for i in range(1, nb_articles + 1):
    with open(PATH_ARTICLES + str(i) + ".htm", encoding="utf-8") as f:
        soup = bs4.BeautifulSoup(f, "html.parser")
        paragraphs = []
        title = soup.find("h1").text.replace("\n", " ")
        # get the intro of the article
        intro = soup.find("p", class_="lead").text.replace("\n", " ")
        # get the content of the article
        content = soup.find("div", class_="article_body").text.replace("\n", " ")

        paragraphs.append(intro)
        paragraphs.append(content)

        article = "".join(paragraphs)
        data = {"title": title, "article": article}
        with open(PATH_DATA + str(i) + ".json", "w", encoding="utf-8") as outfile:
            json.dump(data, outfile, ensure_ascii=False, indent=4)
