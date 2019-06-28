package com.aneta.shop.resource;

import com.aneta.shop.dto.OrderElementDTO;
import com.aneta.shop.entity.OrderElement;
import com.aneta.shop.service.OrderElementService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/order/detail")
public class OrderElementResource extends AbstractResource<OrderElement, OrderElementDTO> {

    private final OrderElementService orderElementService;

    public OrderElementResource(OrderElementService orderElementService) {
        this.orderElementService = orderElementService;
    }

    @Override
    public OrderElementService getService() {
        return orderElementService;
    }
}
