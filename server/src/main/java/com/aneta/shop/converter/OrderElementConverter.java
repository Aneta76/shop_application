package com.aneta.shop.converter;

import com.aneta.shop.dto.OrderElementDTO;
import com.aneta.shop.entity.OrderElement;
import org.springframework.stereotype.Component;

@Component
public class OrderElementConverter implements Converter<OrderElement, OrderElementDTO> {

    private final ProductConverter productConverter;
    private final OrderConverter orderConverter;

    public OrderElementConverter(ProductConverter productConverter, OrderConverter orderConverter) {
        this.productConverter = productConverter;
        this.orderConverter = orderConverter;
    }

    @Override
    public OrderElement convertToEntity(OrderElementDTO dto) {
        OrderElement orderElement = new OrderElement();
        orderElement.setId(dto.getId());
        orderElement.setQuantity(dto.getQuantity());
        orderElement.setOrder(orderConverter.convertToEntity(dto.getOrder()));
        orderElement.setProduct(productConverter.convertToEntity(dto.getProduct()));
        return orderElement;
    }

    @Override
    public OrderElementDTO convertToDTO(OrderElement entity) {
        OrderElementDTO orderElementDTO = new OrderElementDTO();
        orderElementDTO.setId(entity.getId());
        orderElementDTO.setQuantity(entity.getQuantity());
        orderElementDTO.setProduct(productConverter.convertToDTO(entity.getProduct()));
        orderElementDTO.setOrder(orderConverter.convertToDTO(entity.getOrder()));
        return orderElementDTO;
    }
}
