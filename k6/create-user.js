import http from 'k6/http';
import { check } from 'k6';

const baseUrl = 'http://192.168.2.123:30300';

export const options = {
  vus: 2,
  iterations: 10,
  thresholds: {
    checks: ['rate>0.99'],
    http_req_duration: ['p(95)<1000'],
  },
};

export default function () {
  const uniqueId = `${__VU}-${__ITER}-${Date.now()}`;
  const payload = JSON.stringify({
    username: `k6-user-${uniqueId}`,
    email: `k6-user-${uniqueId}@example.com`,
    password: 'k6-test-password',
  });

  const response = http.post(`${baseUrl}/users`, payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(response, {
    'user created (HTTP 201)': (res) => res.status === 201,
  });
}
