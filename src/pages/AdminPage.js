export default function AdminPage({ $target }) {
  this.$container = document.createElement("div");
  this.$container.innerHTML = `<p>AdminPage</p>`;

  $target.appendChild(this.$container);
}
