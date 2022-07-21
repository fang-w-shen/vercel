import { useEffect } from "react";

const name = `👋  I'm Fang`;
export const siteTitle = "FWS - Home";

export default function Layout({ children, home }) {
  useEffect(() => {
    var card = document.getElementById('card');
    card && document.getElementById('flip').addEventListener('click', function () {
      card.classList.toggle('flipped');
    }, false);

  })
  return (
    <div></div>
  );
}
