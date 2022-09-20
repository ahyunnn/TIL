## SWEA _5174_subtree

```python
def find_node(n):
    # 본인은 포함
    global cnt
    # 자식노드가 있는지 확인
    if ch1[n]:
        cnt += 1
        find_node(ch1[n])
    else:
        cnt += 0

    # 다른 자식노드가 있는지 확인
    if ch2[n]:
        cnt += 1
        find_node(ch2[n])
    else:
        cnt += 0

    return cnt


T = int(input())
for tc in range(1, T+1):
    E, N = list(map(int, input().split()))
    arr = list(map(int, input().split()))

    V = E+1         # 정점의 개수
    # print(E, N)
    # print(arr)

    ch1 = [0] * (V+1)
    ch2 = [0] * (V+1)
    cnt = 1
    for i in range(E):
        p = arr[2*i]
        c = arr[2*i+1]

        if ch1[p] == 0:
            ch1[p] = c
        else:
            ch2[p] = c

    result = find_node(N)
    print(f'#{tc} {result}')
```
