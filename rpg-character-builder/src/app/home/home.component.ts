import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
<div>
<h1>Character Builder</h1>
<h2>Come create your character!</h2>
<p>
Welcome to the character builder. Here, you can create, customize, and personalize a character!
</p>
<p>
Start from scratch or find ideas on where to start.
</p>
<div class="highlights-container">
<div class="highlight">
<img
src="/assets/set-of-kids-silhouette-cartoon-character-free-vector.jpg"
alt="silhouette of characters"
/>
<p>
Which will you create?
</p>

</div>
<div class="highlight">
<img
src="/assets/animal.jpg"
alt="animal silhouette"
/>
<p>
Will you create an animal? Select from various types!
</p>
</div>
<div class="highlight">
<img src="/assets/person.avif" alt="person silhouette" />
<p>Will you create a person? Take your pick! Name them and gives them characteristics to give them life!</p>
</div>
</div>
</div>
`,

  styles: [
    `
p{
font-family:'Courier New', Courier, monospace;
}

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
max-width: 100%;
height: auto;
object-fit: cover;
}

.highlight p {
margin-top: 10px;
}
`
  ]
})
export class HomeComponent {
}
