---
title: "Exploring the Longest Common Subsequence"
description: "Discover the Longest Common Subsequence (LCS) algorithm and its implementation in JavaScript using dynamic programming."
image: "/blogImg/lcs.jpg"
date: "21-04-2024"
tag: "programming"
---

<div className="max-w-full mx-auto px-4 py-8 space-y-6">
    <h1 className="text-4xl font-bold mb-6" id="programming">Exploring the Longest Common Subsequence</h1>
    <p className="text-gray-400 text-lg mb-8">Discover the Longest Common Subsequence (LCS) algorithm and its implementation in JavaScript using dynamic programming.</p>
    <img src="https://raw.githubusercontent.com/rkgith01/media/refs/heads/main/All%20Folders/blogImg/lcs.jpg" alt="Longest Common Subsequence" className="mb-6 rounded-lg">
    <section className="mb-8 pt-2">
        <h2 className="text-2xl font-semibold mb-4">Understanding the Problem</h2>
        <p className="leading-relaxed mb-4">
            Before diving into code, let's grasp the essence of the problem. Given two sequences, we aim to find the longest subsequence present in both of them. A subsequence is a sequence that appears in the same relative order but not necessarily contiguous. This means we're interested in finding elements that appear consecutively in both sequences but with possible gaps in between.
        </p>
    </section>
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Dynamic Programming Approach</h2>
        <p className="leading-relaxed mb-4">
            Dynamic programming offers an efficient solution to this problem by breaking it down into smaller subproblems and storing their solutions to avoid redundant calculations. At each step, we build upon the solutions of the smaller subproblems until we arrive at the solution for the entire problem.
        </p>
    </section>
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Let's Dive into the Code</h2>
        <p className="leading-relaxed mb-4">
            Without further ado, let's see how we can implement the LCS algorithm in JavaScript:
        </p>
         <pre className="overflow-x-scroll bg-black text-white p-4 rounded-lg m-4 border"><code class="language-javascript">function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
    
    for (let i = 1; i &lt;= m; i++) {
        for (let j = 1; j &lt;= n; j++) {
            if (str1[i - 1] = str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    let i = m, j = n;
    let result = '';
    while (i &gt; 0 &amp;&amp; j &gt; 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result = str1[i - 1] + result;
            i--;
            j--;
        } else if (dp[i - 1][j] &gt; dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return result;
}

// Example usage:
const str1 = "ABCDGH";
const str2 = "AEDFHR";
console.log("Longest Common Subsequence:", longestCommonSubsequence(str1, str2)); // Output: "ADH"</code></pre>
<span className="text-xs">In the code (str1[i - 1] = str2[j - 1]) should be (arr[i] === target) its because of the parsing issue</span>

</section>
<section className="mb-8">
<h2 className="text-2xl font-semibold mb-4">Breaking Down the Code</h2>
<ul className="list-disc pl-6">
<li className="leading-relaxed">We start by initializing a 2D array <code>dp</code> to store the lengths of the longest common subsequences for different prefixes of the input sequences.</li>
<li className="leading-relaxed">We iterate through each character of both strings and fill the <code>dp</code> array accordingly.</li>
<li className="leading-relaxed">Finally, we backtrack through the <code>dp</code> array to reconstruct the longest common subsequence.</li>
</ul>
</section>
<section>
<h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
<p className="leading-relaxed mb-4">
The LCS algorithm showcases the power and elegance of dynamic programming in solving complex problems efficiently. By breaking down the problem into smaller subproblems and leveraging memoization, we can achieve optimal solutions with relative ease.
</p>
<p className="leading-relaxed mb-4"> In the world of software development, understanding and mastering such algorithms opens doors to solving a wide array of challenges effectively. So, embrace the beauty of dynamic programming and let it empower your problem-solving journey!</p>
</section>

</div>
