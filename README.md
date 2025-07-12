

### Basketball Scoreboard

# Screenshot
Here we have project screenshot :



<img width="518" height="334" alt="Ekran Resmi 2025-07-13 00 49 46" src="https://github.com/user-attachments/assets/7c8ae6c0-5fac-48e5-8ada-f990b77c7d84" />



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
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
