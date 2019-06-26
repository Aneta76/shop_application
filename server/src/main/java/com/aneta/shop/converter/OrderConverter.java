package com.aneta.shop.converter;

import com.aneta.shop.dto.OrderDTO;
import com.aneta.shop.entity.Order;
import org.springframework.stereotype.Component;

import static java.time.LocalDateTime.now;

@Component
public class OrderConverter implements Converter<Order, OrderDTO> {

    @Override
    public Order convertToEntity(OrderDTO dto) {
        Order order = new Order();
        order.setId(dto.getId());
        order.setUser(dto.getUser());
        order.setOrderPlaceTime(now());
        order.setOrderElements(dto.getOrderElements());
        return order;
    }

    @Override
    public OrderDTO convertToDTO(Order entity) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setUser(entity.getUser());
        orderDTO.setId(entity.getId());
        orderDTO.setOrderPlaceTime(entity.getOrderPlaceTime());
        orderDTO.setOrderElements(entity.getOrderElements());
        return orderDTO;
    }
}
