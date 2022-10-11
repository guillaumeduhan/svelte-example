  /**
   * This is API file with all API logic.
   */

  const getUser = async () => {
    return await new Promise(resolve => {
      // TODO: to remove
      setTimeout(() => {
        resolve({
          name: 'Guillaume',
          user_id: 1434324334,
          contracts_id: [2323, 3323, 434]
        })
      }, 0)
    })
  }

  export {
    getUser
  }