import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>RPG Character Builder</h1>
      <h2>Build and Personalize Your Own Character!</h2>
      <p>
        Welcome to your own personal RPG Character Builder! Do you love video games
        or are a RPG enthusiast? Well good news! Here at RPG Character Builder,
        you will find everything you need! Want to customize a character?
        Want to build your own character? Are you more of a storyteller and want to
        create a background for a character? Everything you need is right here in
        your virtual RPG Character Builder!
      </p>
      <p>
        Whether you are an avid gamer, RPG enthusiast, or someone who wants to practice
        your Angular skills, we are here for you!
      </p>

      <div class="highlights-container">
        <div class="highlight">
          <img src="/assets/gamer.webp" alt="image of game controller"/>
          <p>
            GAMERS!
          </p>
          <p>
            Do you love gaming? Have a favorite character you want to personalize and
            add your own style to? You're in luck! Take inspiration from your favorite
            video game and add your own unique flair! Take the character to new heights
            and add a new flavor!
          </p>
        </div>
        <div class="highlight">
          <img src="/assets/storyteller.png" alt="image of a colorful cartoon of a book with rainbow, trees, a castle, etc coming out"/>
          <p>
            STORYTELLERS!
          </p>
          <p>
            Do you love creating new and exciting adventures? Want to add lore to some
            characters? Add personality and backgrounds? You came to the right spot! Select
            a character and start adding some fun storytelling elements! Is your character
            coming from an adventure? Is your character bold and brave? Maybe even a secret
            superhero? There are no limits to imagination here!
          </p>
        </div>
        <div class="highlight">
          <img src="/assets/Creator.avif" alt="image of a book with the word IDEAS and doodles coming out" />
          <p> CREATORS!
          </p>
          <p>
            Do you want a place to turn your ideas into reality? Want to create your characters?
            Good thing you found the RPG Character Builder! You don't have to be an expert here!
            Take your ideas and take off! Do you have an idea in your head, but are not sure how
            to put it down on paper? Great thing about RPG Character Builder is that it is
            100% digital! Take this website with you anywhere you go and start creating! Ever get
            stuck on an idea and don't know where to go after? Take inspiration and build off of it!
          </p>
        </div>
        <p>
        Everyone is welcome here no matter how knowledgable you are on characters. Start with
        inspiration or fresh, RPG Character Builder is for everyone with imagination! Never let
        an idea go to waste and start character building today!
        </p>
      </div>

    </div>
  `,
  styles: `
  .highlights-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }

  .highlight {
    text-align: center;
    flex: 0 1 calc(33.333% - 20px);
    box-sizing: border-box;
  }

  .highlight img {
    border: 1px solid #2d8bee;
    border-radius: 8px;
    padding: 5px;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .highlight p {
    margin-top: 10px;
  }`
})
export class HomeComponent {

}
