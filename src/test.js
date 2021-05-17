gethoustonshirts = async () => {
    api.get('/', options).then(res => {
      console.log(res.data)
      this.setState({ shirts: res.data.data })
    })
      data = this.state.shirts
      houArray = [];
    for(let i = 0; i < data.length; i++) {
      if (data[i].title.includes("Astros")){
        houArray.push(data);
        this.setState({houstonshirts: houArray})
        console.log("houstonshirts = " + houstonshirts)
        } 
    }
}