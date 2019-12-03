export default function getMoreData(data) {
  let string = "";
  data.data.hits.forEach(item => {
    string += `<div class="photo-card">
        <img src="${item.previewURL}" alt="tags" />

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
