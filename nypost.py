import bs4
import json

path = "./articles/nypost/"
nb_articles = 7

for i in range(1, nb_articles + 1):
    with open(path + str(i) + ".htm", encoding="utf-8") as f:
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
        with open(path + str(i) + ".json", "w", encoding="utf-8") as outfile:
            json.dump(data, outfile, ensure_ascii=False, indent=4)
