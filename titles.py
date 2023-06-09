import matplotlib.pyplot as plt
import numpy as np

data = {
        'Suite de carrière': [1, 1, 1],
        'Annonce de retraite': [2, 3, 3],
        'Légende et héritage': [3, 2, 2],
        'Hommage': [3, 3, 2],
        'Conséquences et impact': [3, 4, 5],
        'Palmarès': [2, 3, 2],
        }

switzerland = [v[0] for v in data.values()]
france = [v[1] for v in data.values()]
usa = [v[2] for v in data.values()]

# make pie for each country

fig, (ax1, ax2, ax3) = plt.subplots(1, 3, figsize=(17, 3))

ax1.pie(switzerland, labels=None, autopct='%1.1f%%', startangle=90)
ax1.set_title('Switzerland')

ax2.pie(france, labels=None, autopct='%1.1f%%', startangle=90)
ax2.set_title('France')

ax3.pie(usa, labels=None, autopct='%1.1f%%', startangle=90)
ax3.set_title('USA')

plt.legend(
        loc="upper left",
        labels=data.keys(),
        bbox_to_anchor=(1, 0, 0, 1),
    )

plt.savefig('titles.png')

