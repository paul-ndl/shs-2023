import matplotlib.pyplot as plt
import json
import pandas as pd
import numpy as np

# remove the warning
pd.options.mode.chained_assignment = None


# read the json file
with open("articles_scores.json", encoding="utf-8") as f:
    articles_scores = json.load(f)

# create a dataframe
df = pd.DataFrame(articles_scores)


def absolute_value(val, nb_articles):
    a = np.round(val / 100.0 * nb_articles, 0)
    return a


def save_plot(df, media):
    filtered_df = df[df["media"] == media]
    n = len(filtered_df)
    # round the average stars to the nearest integer
    filtered_df["avg_stars"] = filtered_df["avg_stars"].round()
    # count the number of articles for each average stars
    filtered_df = filtered_df.groupby("avg_stars").count()
    # plot the results
    filtered_df.plot.pie(
        y="title",
        figsize=(5, 5),
        autopct=lambda val: absolute_value(val, n),
        shadow=True,
        startangle=90,
        labels=None,
    )
    # modify the legend
    plt.legend(
        loc="upper left",
        labels=["1 étoile", "2 étoiles", "3 étoiles"],
        bbox_to_anchor=(-0.1, 0, 0, 1.1),
    )
    plt.title("Media : " + media)
    plt.ylabel("")
    plt.savefig(media + ".png")


# plot the results for the "temps" media using pie chart
save_plot(df, "temps")

# plot the results for the "figaro" media using pie chart
save_plot(df, "figaro")

# plot the results for the "ny" media using pie chart
save_plot(df, "ny")
