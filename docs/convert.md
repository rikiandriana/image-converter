# Convert API Spec

- endpoint: POST /api/convert
- query: image=_format-target_

Body/multipart-form:

```
{
    image: *image file*
}
```

Response Success:
`attached converted image file`
Response Error :

```json
{
    "errors": "Unsuported image format"
}
```
