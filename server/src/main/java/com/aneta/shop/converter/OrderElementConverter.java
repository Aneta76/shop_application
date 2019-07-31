package com.aneta.shop.converter;

import com.aneta.shop.dto.OrderElementDTO;
import com.aneta.shop.entity.Order;
import com.aneta.shop.entity.OrderElement;
import org.springframework.stereotype.Component;

@Component
public class OrderElementConverter implements Converter<OrderElement, OrderElementDTO> {

    private final ProductConverter productConverter;

    public OrderElementConverter(ProductConverter productConverter) {
        this.productConverter = productConverter;
    }

    @Override
    public OrderElement convertToEntity(OrderElementDTO dto) {
        Order order = new Order();
        order.setId(1L); //to be explained by java masters
        OrderElement orderElement = new OrderElement();
        orderElement.setId(dto.getId());
        orderElement.setQuantity(dto.getQuantity());
        orderElement.setOrder(order);
        orderElement.setProduct(productConverter.convertToEntity(dto.getProduct()));
        return orderElement;
    }

    @Override
    public OrderElementDTO convertToDTO(OrderElement entity) {
        OrderElementDTO orderElementDTO = new OrderElementDTO();
        orderElementDTO.setId(entity.getId());
        orderElementDTO.setQuantity(entity.getQuantity());
        orderElementDTO.setProduct(productConverter.convertToDTO(entity.getProduct()));
        return orderElementDTO;
    }
}
