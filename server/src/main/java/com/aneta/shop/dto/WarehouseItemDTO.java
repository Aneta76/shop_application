package com.aneta.shop.dto;

import java.math.BigDecimal;

public class WarehouseItemDTO extends AbstractDTO {

    private Long quantity;
    private ProductDTO product;
    private BigDecimal price;

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public ProductDTO getProduct() {
        return product;
    }

    public void setProduct(ProductDTO product) {
        this.product = product;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
