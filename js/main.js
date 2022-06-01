var service = new Services();


function getEle(id){{
    return document.getElementById(id);
}}

function getListProducts(){{
   
    //lay danh sach san pham tu server
    var promise = service.getListProductsApi();
    promise
    .then(function(result){{
        renderListProduct(result.data);
        
    }})
    .catch(function(error){{
        console.log(error);
    }})

}}



getListProducts();

function renderListProduct(data){
    var contentHTML = "";
    data.forEach(function(product){
        contentHTML += `
        <div class="col-12 col-md-6 col-lg-3">
                  <div class="card cardPhone">
                      <img src="./images/${product.hinhAnh}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h4>${product.ngonNgu}</h4>
                          <h3>${product.hoTen}</h3>
                          <span>${product.moTa}</span>
                      </div>
                  </div>
              </div>
        `
    });

    getEle("listProduct").innerHTML = contentHTML;
}
