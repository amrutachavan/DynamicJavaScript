 /**
        This file is used to store to the input data.
 */
 var movieList = new Array(25);
        movieList[0]=["Select Movie Search Type","genre", "actor","actress","Language"];
        movieList["genre"] = ["Select The Genre","Action","Comedy","Crime","Animation","Biography","Sci-Fi"];
        movieList["actor"] = ["Select The Actor","Leonardo DiCaprio","Will Smith","Johny Depp","Brad Pit","Tom Hanks"];
        movieList["actress"] = ["Select The Actress","Kate Winslet","Anne Hathaway","Sandra Bullock","Julia Roberts","Jennifer Aniston","Jennifer Lawrence"];
        movieList["Language"] = ["Select The Language","English","French","Japanese","Hindi"];
        movieList["Action"]=["Select The Movie","The Matrix","Die Hard","The Rock","Enter The Dragon","Casino Royale"];
        movieList["Comedy"]=["Select The Movie","Mr. Bean's Holiday","The Hangover","Ted","Rush Hour","Men in black"];
        movieList["Crime"]=["Select The Movie","The Godfather","Pulp Fiction","The Shawshank Redemption","Sin City","The Silence of the Lambs",""];
        movieList["Animation"]=["Select The Movie","Finding Nemo","Frozen","Inside Out","Toy Story 3","Wall-E","Tangled"];
        movieList["Biography"]=["Select The Movie","Schindler's List","The Pianist","Braceheart","A Beautiful Mind","The Social Network"];
        movieList["Sci-Fi"]=["Select The Movie","Inception","Avatar","The Martian","Stars Wars","Interstellar","Gravity"];
        movieList["Leonardo DiCaprio"]=["Select The Movie","The Revenant","Titanic","The wolf of Wall Street","What's Eating Gilbert Grape","Catch Me if you Can"];
        movieList["Will Smith"]=["Select The Movie","Sucide Squad","Independence Day","The Pursuit of Happyness","I,Robot","Men in Black"];
        movieList["Johny Depp"]=["Select The Movie","The Lone Ranger","Pirates of Caribbean","Charlie and the chocolate Factory","Alice in Wonderland"];
        movieList["Brad Pit"]=["Select The Movie","The Curious Case of Benjamin Button","World War Z","Mr.&Mrs. Smith","Fight Club","Fury"];
        movieList["Tom Hanks"]=["Select The Movie","Forest Gump","Cast Away","Saving Private Ryan","You've Got Mail","The Terminal"];
        movieList["Kate Winslet"]=["Select The Movie","Titanic","Eternal Sunshine of the Spotless Mind","Divergent","Enigma"];
        movieList["Anne Hathaway"]=["Select The Movie","The Princess Diaries","The Intern","The Devil wears Prada","Interstellar","Ella Enchanted"];
        movieList["Sandra Bullock"]=["Select The Movie","The Proposal","Gravity","Two weeks Notice","While you were sleeping","Speed"];
        movieList["Julia Roberts"]=["Select The Movie","Pretty Woman","Notting Hill","Runaway Bride","Stepmom","Mother's Day"];
        movieList["Jennifer Aniston"]=["Select The Movie","Horrible Bosses","The Break-up","Marley & Me","The Object of My Affection","Picture Perfect"];
        movieList["Jennifer Lawrence"]=["Select The Movie","Joy","Silver Linings Playbook","X-Men Apocalypse","The Hunger Games","American Hustle"];
        movieList["English"]=["Select The Movie","Mad Max:Fury Road","Furious 7","Jurassic World","Transformers: Dark of the Moon","Monsters university"];
        movieList["French"]=["Select The Movie","Intouchables","La Veuve de Saint-Pierre","La vengeance d'une femme","la famille belier"];
        movieList["Japanese"]=["Select The Movie","Seven Samurai","Spirited Away","Princess Mononoke","Twenty-Four Eyes","Godzilla"];
        movieList["Hindi"]=["Select The Movie","Mughal-e-Azam","Dilwale Dulhania Le Jayenge","Namaste London","Sholay"];

/*getInputData function returns the input array
*/
function getInputData() {
        return movieList;
}        