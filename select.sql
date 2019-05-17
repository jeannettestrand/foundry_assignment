SELECT customer, SUM(ordervalue) FROM orders GROUP BY customer ORDER BY customer;

