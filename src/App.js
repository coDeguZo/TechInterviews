import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Create a function thats going to take in a string of data types.
  // The function should return the longest palindrome within that string.

  palindrome = (string) => {
    let reversed = string.toLowerCase().replace(/[^a-z0-9]+/g, "").split("").reverse().join("")
    let replace = string.toLowerCase().replace(/[^a-z0-9]+/g, "").split("").join("")
    return (replace === reversed)
  }

  longestPalindrome = (string) => {
    let replace = string.toLowerCase().replace(/[^a-z0-9]+/g, "").split("").join("")
    let actualPalindromes = []
    let longestPalindromeFinal = ""
    for (let i = 0; i < replace.length; i++){
      let palindromeArray = []
      palindromeArray.push(replace[i])
      for (let j = i + 1; j < replace.length; j++){
        // Iterating over the replace variable.
        // Need to find the palidrome within the string.
        // Create new array to push substrings into
        // Run the array inside the palindrome function to check if it is a palindrome.
        // If palindrome then save as palindrome
        // Compare palindrome length to other plaindrome lengths.
        // Return the longest palindrome
        palindromeArray.push(replace[j])
        if (this.palindrome(palindromeArray.join(""))){
          actualPalindromes.push(palindromeArray.join(""))
        }
      }
    }
    for (let i = 0; i < actualPalindromes.length; i++){
      if (longestPalindromeFinal < actualPalindromes[i]){
        longestPalindromeFinal = actualPalindromes[i]
      } 
    }
    console.log(longestPalindromeFinal)
  }

    render(){
    return (
      <div className="App">
        <h1> Palindrome Problem </h1>
        {this.longestPalindrome("I have a Race car that's fast")}
      {/* “A palindrome as defined for this exercise is any cluster or 
      characters that are the same forward and backward”.  
      For example, ""I have a Race car that's fast" should return "racecar" */}
      </div>
    );
  }
}

export default App;
