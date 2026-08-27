package com.example.ecom.order.controller;

import com.example.ecom.order.entity.Order;
import com.example.ecom.order.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Place order / checkout
    @PostMapping
    public Order createOrder() {
        return orderService.createOrder();
    }

    // Get logged-in user's order history
    @GetMapping
    public List<Order> getMyOrders() {
        return orderService.getMyOrders();
    }

    // Get a specific order
    @GetMapping("/{orderNumber}")
    public Order getOrder(
            @PathVariable String orderNumber) {

        return orderService.getOrder(orderNumber);
    }
}