System design notes
# Stage 1

## Priority Logic
Priority order:
1. Placement
2. Result
3. Event

## Sorting Logic
- First sort by priority weight
- If same priority, sort by latest timestamp

## Approach Used
Used JavaScript array sorting to find top 10 notifications.

## Optimization
For continuous incoming notifications, a Max Heap / Priority Queue can maintain top notifications efficiently.