  /**
   * This is API file with all API logic.
   */

  const getUser = async () => {
    // example
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'Guillaume',
          id: 1
        })
      }, 3000)
    })
  }

  export {
    getUser
  }