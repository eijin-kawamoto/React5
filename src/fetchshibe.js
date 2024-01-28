async function fetchshibe() {
    const request = await fetch("http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]");
    const data = await request.json();
    console.log(data);
  }
  