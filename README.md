

### Basketball Scoreboard

# Screenshot
Here we have project screenshot :


<img width="518" height="334" alt="Ekran Resmi 2025-07-13 00 49 46" src="https://github.com/user-attachments/assets/2be1e258-06b0-4cdf-b85d-adb984cd0d72" />



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // Challenge Section
// Conditional .leader CSS effct //
function scoreLeaderEffect() {
    if (scoreHome > scoreAway) {
        awayScore.classList.remove("leader");
        homeScore.classList.add("leader");
        } else if (scoreAway > scoreHome) {
        awayScore.classList.add("leader");
        homeScore.classList.remove("leader");
    } else {
homeScore.classList.remove("leader");
        awayScore.classList.remove("leader");
    }
}
