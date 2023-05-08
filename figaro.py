from bs4 import BeautifulSoup
import json

NB_ARTICLES = 16
PATH = "./articles/figaro/"

for i in range(1, NB_ARTICLES + 1):
    with open(PATH + str(i) + '.htm', encoding='utf-8') as fp:
        soup = BeautifulSoup(fp, 'html.parser')
        title = soup.find('h1', class_='fig-headline').text.replace('\n', ' ')
        paragraphs = []
        annonce = soup.find('p', class_='fig-standfirst').text.replace('\n', ' ')
        paragraphs.append(annonce)
        content = soup.find('div', class_='fig-content-body')
        for p in content.find_all('p', class_='fig-paragraph'):
            paragraphs.append(p.text.replace('\n', ' '))
        article = ''.join(paragraphs)
        data = {'title': title, 'article': article}
        with open(PATH + str(i) + '.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)


    

    


