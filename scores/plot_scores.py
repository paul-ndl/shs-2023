import matplotlib.pyplot as plt
import json
import pandas as pd
import numpy as np


# read the json file
with open("articles_scores.json", encoding="utf-8") as f:
    articles_scores = json.load(f)

# create a dataframe
df = pd.DataFrame(articles_scores)


def absolute_value(val, nb_articles):
    a = np.round(val / 100.0 * nb_articles, 0)
    return a


# create a single subplot for all three pie charts
fig, (ax1, ax2, ax3) = plt.subplots(1, 3, figsize=(12, 3))

# =============================================================================
temps_df = df[df["media"] == "temps"]
n = len(temps_df)
# round the average stars to the nearest integer
temps_df["avg_stars"] = temps_df["avg_stars"].round()
# count the number of articles for each average stars
temps_df = temps_df.groupby("avg_stars").count()
# plot the results
temps_df.plot.pie(
    y="title",
    ax=ax1,
    autopct="%1.1f%%",
    shadow=True,
    startangle=90,
    labels=None,
)
# modify the legend
ax1.set_title("Suisse")
ax1.set_ylabel("")

# =============================================================================

figaro_df = df[df["media"] == "figaro"]
n = len(figaro_df)
# round the average stars to the nearest integer
figaro_df["avg_stars"] = figaro_df["avg_stars"].round()
# count the number of articles for each average stars
figaro_df = figaro_df.groupby("avg_stars").count()
# plot the results
figaro_df.plot.pie(
    y="title",
    ax=ax2,
    autopct="%1.1f%%",
    shadow=True,
    startangle=90,
    labels=None,
)
# modify the legend
ax2.set_title("France")
ax2.set_ylabel("")

#  =============================================================================
ny_df = df[df["media"] == "ny"]
n = len(ny_df)
# round the average stars to the nearest integer
ny_df["avg_stars"] = ny_df["avg_stars"].round()
# count the number of articles for each average stars
ny_df = ny_df.groupby("avg_stars").count()
# plot the results
ny_df.plot.pie(
    y="title",
    ax=ax3,
    autopct="%1.1f%%",
    shadow=True,
    startangle=90,
    labels=None,
)
# modify the legend
ax3.set_title("Etats Unis")
ax3.set_ylabel("")

ax1.legend().set_visible(False)
ax2.legend().set_visible(False)
plt.legend(
    loc="upper left",
    labels=["1 étoile", "2 étoiles", "3 étoiles"],
    bbox_to_anchor=(1, -0.6, 0, 1.1),
)
plt.subplots_adjust(wspace=-0.5)
plt.savefig("scores.png")
