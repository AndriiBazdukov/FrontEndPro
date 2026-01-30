<Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
        <Route path="products" element={<ProductsPage />} />
        <Route path="preview" element={<ProductPreview />} />
    </Route>
</Routes>