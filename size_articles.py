import json
import numpy as np


figaro_path = "./data/figaro/"
nb_articles_figaro = 16

ny_path = "./data/ny/"
nb_articles_ny = 15

temps_path = "./data/temps/"
nb_articles_temps = 14


paths = [figaro_path, ny_path, temps_path]
nb_articles = [nb_articles_figaro, nb_articles_ny, nb_articles_temps]


def size_articles(paths, nb_articles):
    """
    :param path: path to the articles
    :param nb_articles: number of articles
    :return: a list of the size of the articles
    """
    size_per_country = {}
    for path, nb in zip(paths, nb_articles):
        for i in range(1, nb + 1):
            with open(path + str(i) + ".json", encoding="utf-8") as json_file:
                data = json.load(json_file)
                article = data["article"]
                # get number of char without spaces
                size = len(article) - article.count(" ")
                size_per_country[path + str(i) + ".json"] = size
    return size_per_country


# use numpy to compute the tertiles of the size of the articles
# by keeping the keys of the dictionary
def tertiles(size_per_country):
    """
    :param size_per_country: a dictionary with the size of the articles
    :return: a dictionary with the tertiles of the size of the articles
    """

    tertiles = np.percentile(list(size_per_country.values()), [33, 66])
    _max = max(size_per_country.values())
    _min = min(size_per_country.values())
    tertiles_dict = {}
    for key, value in size_per_country.items():
        if value < tertiles[0]:
            tertiles_dict[key] = 1
        elif value < tertiles[1]:
            tertiles_dict[key] = 2
        else:
            tertiles_dict[key] = 3
    return tertiles_dict, tertiles, _min, _max


tertiles_dict, tertiles, _min, _max = tertiles(size_articles(paths, nb_articles))

print("min: ", _min)
print("max: ", _max)
print("tertiles: ", tertiles)
for elemen in tertiles_dict:
    print(elemen, tertiles_dict[elemen])
