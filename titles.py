import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

data = {
    "Suite de carrière": [1, 1, 1],
    "Annonce de retraite": [2, 3, 3],
    "Légende et héritage": [3, 2, 2],
    "Hommage": [3, 3, 2],
    "Conséquences et impact": [3, 4, 5],
    "Palmarès": [2, 3, 2],
}

switzerland = [v[0] for v in data.values()]
france = [v[1] for v in data.values()]
usa = [v[2] for v in data.values()]

# create a dataframe
df = pd.DataFrame(data)
# add index column
df.index = ["Suisse", "France", "Etats Unis"]

switzerland = df.iloc[0]
france = df.iloc[1]
usa = df.iloc[2]

# plot the results with pie chart
fig, (ax1, ax2, ax3) = plt.subplots(1, 3, figsize=(12, 3))
switzerland.plot.pie(
    ax=ax1,
    autopct="%1.1f%%",
    shadow=True,
    startangle=90,
    labels=None,
)
ax1.set_title("Suisse")
ax1.set_ylabel("")

france.plot.pie(
    ax=ax2,
    autopct="%1.1f%%",
    shadow=True,
    startangle=90,
    labels=None,
)
ax2.set_title("France")
ax2.set_ylabel("")

usa.plot.pie(
    ax=ax3,
    autopct="%1.1f%%",
    shadow=True,
    startangle=90,
    labels=None,
)
ax3.set_title("Etats Unis")
ax3.set_ylabel("")
plt.legend(
    loc="upper left",
    labels=data.keys(),
    bbox_to_anchor=(1, -0.6, 0, 1.1),
)
plt.subplots_adjust(wspace=-0.5)
plt.savefig("titles.png")
