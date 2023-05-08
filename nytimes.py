from bs4 import BeautifulSoup
import json

NB_ARTICLES = 9
PATH_ARTICLES = "./articles/nytimes/"
PATH_DATA = "./data/ny/"

for i in range(1, NB_ARTICLES + 1):
    with open(PATH_ARTICLES + str(i) + '.htm', encoding='utf-8') as fp:
        soup = BeautifulSoup(fp, 'html.parser')
        title = soup.find('h1').text.replace('\n', ' ')
        paragraphs = []
        summary = soup.find('p', id='article-summary').text.replace('\n', ' ')
        paragraphs.append(summary)
        for p in soup.find_all('p', class_='css-at9mc1'):
            paragraphs.append(p.text.replace('\n', ' '))
        article = ''.join(paragraphs)
        data = {'title': title, 'article': article}
        with open(PATH_DATA + str(i) + '.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)


    

    


