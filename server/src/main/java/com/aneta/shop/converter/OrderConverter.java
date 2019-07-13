package com.aneta.shop.converter;

import com.aneta.shop.dto.OrderDTO;
import com.aneta.shop.dto.OrderElementDTO;
import com.aneta.shop.entity.Order;
import com.aneta.shop.entity.OrderElement;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

import static java.time.LocalDateTime.now;

@Component
public class OrderConverter implements Converter<Order, OrderDTO> {

    private final OrderElementConverter orderElementConverter;

    public OrderConverter(OrderElementConverter orderElementConverter) {
        this.orderElementConverter = orderElementConverter;
    }

    @Override
    public Order convertToEntity(OrderDTO dto) {
        Order order = new Order();
        order.setId(dto.getId());
        order.setUser(dto.getUser());
        order.setOrderPlaceTime(now());
        Set<OrderElement> entitySet = new HashSet<>();
        for (OrderElementDTO o : dto.getOrderElements()) {
            entitySet.add(orderElementConverter.convertToEntity(o));
        }
        order.setOrderElements(entitySet);
        return order;
    }

    @Override
    public OrderDTO convertToDTO(Order entity) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setUser(entity.getUser());
        orderDTO.setId(entity.getId());
        orderDTO.setOrderPlaceTime(entity.getOrderPlaceTime());
        Set<OrderElementDTO> dtoSet = new HashSet<>();
        for (OrderElement o : entity.getOrderElements()) {
            dtoSet.add(orderElementConverter.convertToDTO(o));
        }
        orderDTO.setOrderElements(dtoSet);
        return orderDTO;
    }
}
