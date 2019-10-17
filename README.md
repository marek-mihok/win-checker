# win-checker
**TASK:** Application checks if the game state (represented by 2D array) of "Tic-tac-toe" is a win state, draw state or in progress.  

* Function: checkwin(array[][]){}

Example states:

* Game state: WIN  
+-+-+-+  
|X|O|O|  
+-+-+-+  
|O|O|X|  
+-+-+-+  
|X|O|X|  
+-+-+-+  
For given 2D array it should output: WIN  


* Game state: WIN  
+-+-+-+  
| |O| |  
+-+-+-+  
|X|O|X|  
+-+-+-+  
| |O|X|  
+-+-+-+  
For given 2D array it should output: WIN  


* Game state: DRAW  
+-+-+-+  
|X|O|O|  
+-+-+-+  
|O|X|X|  
+-+-+-+  
|X|O|O|  
+-+-+-+  
* For given 2D array it should output: DRAW  

Game state: IN-PROGRESS  
+-+-+-+  
| |O|O|  
+-+-+-+  
| | |X|  
+-+-+-+  
| | | |  
+-+-+-+  
For given 2D array it should output: IN-PROGRESS  


**BONUS:** Add the winner to output.  

Examples:  

* WIN. Player O Wins!   
* WIN. Player X Wins!   
