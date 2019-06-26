package com.aneta.shop.resource;

import com.aneta.shop.dto.OrderDTO;
import com.aneta.shop.entity.Order;
import com.aneta.shop.service.OrderService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orders")
public class OrderResource extends AbstractResource<Order, OrderDTO> {

    private final OrderService orderService;

    public OrderResource(OrderService orderService) {
        this.orderService = orderService;
    }

    @Override
    public OrderService getService() {
        return orderService;
    }
}