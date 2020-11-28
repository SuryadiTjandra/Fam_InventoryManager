INSERT INTO address (id, name, street, city, province, postal_code, created_date, created_by)
VALUES (0, 'Pesapen', 'Jalan Pesapen Kali 16A', 'Surabaya', 'Jawa Timur', '60133', '2019-11-28T00:00:00', 'test');

INSERT INTO company (id, name, address_id, created_date, created_by)
VALUES (0, 'UD Remaja', 0, '2019-11-28T00:00:00', 'test');

INSERT INTO user (id, name, password, email, company_id, created_date, created_by)
VALUES (0, 'dev', 'dev', 'dev@dev.com', 0, '2019-11-28T00:00:00', 'test');