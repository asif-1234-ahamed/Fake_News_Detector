function checkNews() {
    let text = document.getElementById("newsInput").value;
    let resultDiv = document.getElementById("result");

    if (text.trim() === "") {
        resultDiv.innerHTML = "⚠️ Please enter some news text!";
        resultDiv.style.color = "orange";
        return;
    }

    // Simple keyword-based fake detection (demo only)
    let fakeKeywords = ["shocking", "click here", "breaking!!!", "100% cure", "guaranteed"];
    
    let isFake = fakeKeywords.some(word => 
        text.toLowerCase().includes(word)
    );

    if (isFake) {
        resultDiv.innerHTML = "❌ This looks like FAKE news!";
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = "✅ This seems REAL news!";
        resultDiv.style.color = "green";
    }
}
