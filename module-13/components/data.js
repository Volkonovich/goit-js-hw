export default function getNewData(data) {
  let string = "";
  data.data.hits.forEach(item => {
    string += `<div class="photo-card">
        <img src="${item.webformatURL}" alt="tags" width="330" />

        <div class="stats">
          <p class="stats-item">
            <i class="material-icons">thumb_up</i>${item.likes}
          </p>
          <p class="stats-item">
            <i class="material-icons">visibility</i>${item.views}
          </p>
          <p class="stats-item">
            <i class="material-icons">comment</i>${item.comments}
          </p>
          <p class="stats-item">
            <i class="material-icons">cloud_download</i>${item.downloads}
          </p>
        </div>
      </div>`;
  });
  return string;
}
