async function fetchshibe() {
    const request = await fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true");
    const data = await request.json();
    console.log(data);
  }
  