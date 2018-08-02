#Gridland Metro

The city of Gridland is represented as an matrix where the rows are numbered from to and the columns are numbered from to .
Gridland has a network of train tracks that always run in straight horizontal lines along a row. In other words, the start and end points of a train track are and , where represents the row number, represents the starting column, and represents the ending column of the train track.
The mayor of Gridland is surveying the city to determine the number of locations where lampposts can be placed. A lamppost can be placed in any cell that is not occupied by a train track.
Given a map of Gridland and its train tracks, find and print the number of cells where the mayor can place lampposts.
Note: A train track may overlap other train tracks within the same row.

For example, if Gridland's data is the following:

k = 3
r	  c1	c2
1	  1	  4
2	  2	  4
3	  1 	2
4	  2	  3	

It yields the following map:

![](https://raw.githubusercontent.com/ivansaldivar/varios/master/c-gridland_2.png).
