import $ from "jquery";

export default function fixSize() {
  const images = $(".image_container img");
  function setsize() {
    console.log("images");
    const img = $(this);
    const imgDom = img.get(0);
    const container = img.parents(".img-container");
    function resize() {
      if (
        container.width() / container.height() <
        imgDom.width / imgDom.height
      ) {
        console.log("Размеры", imgDom.width, imgDom.height);
        img.width("100%");
        img.height("auto");
        return;
      }
      img.height("100%");
      img.width("auto");
    }
    if (imgDom.complete) {
      resize();
    } else img.one("load", resize);
  }

  images.each(setsize);
}
