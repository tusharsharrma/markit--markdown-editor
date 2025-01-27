import { createContext } from "react";

// Initial state with a greeting message
const initialState = "Welcome to your Markdown Editor!";

// Create the context
export const MarkdownContext = createContext(initialState);

// # Hi! Welcome To Mark-O-Matic  

// Markdown lets you style text easily. Here’s how to get started:  

// ---
// <br>
// ## Headings
// To create headings, use the `#` symbol followed by a space. The number of `#` determines the heading level.
// <br>

// **This is bold text**  
// *This is italic text*  
// ***This is bold and italic***  
// <br>
// ## Lists
// - Use -, *, or + for bullet points.
// - Item 1
//   - Sub-item 2.2 
// <br>

// 1. Use numbers followed by a period (1.) for ordered lists.
// 2. Step 1
// 3. Step 2
