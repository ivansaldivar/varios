#Gridland Metro

The city of Gridland is represented as an matrix where the rows are numbered from to and the columns are numbered from to .
Gridland has a network of train tracks that always run in straight horizontal lines along a row. In other words, the start and end points of a train track are and , where represents the row number, represents the starting column, and represents the ending column of the train track.
The mayor of Gridland is surveying the city to determine the number of locations where lampposts can be placed. A lamppost can be placed in any cell that is not occupied by a train track.
Given a map of Gridland and its train tracks, find and print the number of cells where the mayor can place lampposts.
Note: A train track may overlap other train tracks within the same row.

For example, if Gridland's data is the following:

![](https://raw.githubusercontent.com/ivansaldivar/varios/master/figura1.png).

---
Input Format

The first line contains three space-separated integers and , the number of rows, columns and tracks to be mapped.

Each of the next lines contains three space-separated integers, and , the row number and the track column start and end.


Constraints
---
![](https://raw.githubusercontent.com/ivansaldivar/varios/master/figura2.png).

Output Format

Print a single integer denoting the number of cells where the mayor can install lampposts.

Sample Input
