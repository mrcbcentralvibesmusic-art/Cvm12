// Helper JS functions for the entire site
// All fetch calls should use API_BASE defined in each HTML page

// Example: search filter (can be reused across pages)
function filterItems(items, query, keys) {
  return items.filter(item =>
    keys.some(key => item[key].toLowerCase().includes(query))
  );
}

// Optional: Generic function to display songs
function displaySongs(container, songs, apiBase) {
  container.innerHTML = '';
  songs.forEach(song => {
    container.innerHTML += `
      <div class="bg-gray-800 rounded-lg p-4 flex flex-col justify-between">
        <h3 class="font-bold text-lg mb-2">${song.title}</h3>
        <p class="mb-2">${song.artist}</p>
        <audio controls class="mb-2 w-full">
          <source src="${apiBase}${song.file}" type="audio/mpeg">
        </audio>
        <a href="${apiBase}${song.file}" download class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 text-center">Download</a>
      </div>
    `;
  });
}

// Optional: Generic function to display artists
function displayArtists(container, artists, apiBase) {
  container.innerHTML = '';
  artists.forEach(a => {
    container.innerHTML += `
      <div class="bg-gray-800 rounded-lg overflow-hidden text-center p-4">
        <img src="${apiBase}${a.image}" alt="${a.name}" class="w-full h-48 object-cover mb-4 rounded">
        <h3 class="font-bold text-xl mb-2">${a.name}</h3>
        <p class="text-gray-400 mb-2">${a.genre}</p>
        <a href="songs.html" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">View Songs</a>
      </div>
    `;
  });
}

// Optional: Generic function to display blogs
function displayBlogs(container, blogs, apiBase) {
  container.innerHTML = '';
  blogs.forEach(b => {
    container.innerHTML += `
      <div class="bg-gray-800 rounded-lg p-4 flex flex-col justify-between">
        <img src="${apiBase}${b.image}" class="rounded mb-4" />
        <h3 class="font-bold text-lg mb-2">${b.title}</h3>
        <p class="text-gray-400 mb-2">${b.summary}</p>
        <a href="${b.link}" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 text-center">Read More</a>
      </div>
    `;
  });
}