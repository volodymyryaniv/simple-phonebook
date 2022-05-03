export default async function requestPhonebook(url,method,data=null) {
   try {
      const headers = {};
      let body;

      if (data) {
         headers['Content-Type'] = 'application/json';
         body = JSON.stringify(data);
      }

      const response = await fetch(url, {
         method,
         headers,
         body
      })
      return await response.json();
   } catch (err) {
      throw new Error(err.message);
   }
}